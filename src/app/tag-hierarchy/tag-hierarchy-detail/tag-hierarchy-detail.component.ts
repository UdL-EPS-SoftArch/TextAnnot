import { TagTree } from './../tag-hierarchy-tree';
import { Component, OnInit } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';
import { ActivatedRoute, Router } from '@angular/router';
import { TagHierarchyService } from '../tag-hierarchy.service';
import {Location} from '@angular/common';
import { TREE_ACTIONS, KEYS } from 'angular-tree-component';

@Component({
  selector: 'app-tag-hierarchy-detail',
  templateUrl: './tag-hierarchy-detail.component.html',
  styleUrls: ['./tag-hierarchy-detail.component.css']
})
export class TagHierarchyDetailComponent implements OnInit {

  public tagHierarchy: TagHierarchy;
  public errorMessage: string;
  public formTitle = ' details';
  public formSubtitle = 'Taghierarchy details page';
  public tagHierarchies: TagHierarchy[] = [];
  public nodes: TagTree[];
  public structure: Boolean = false;
  public options = {
    animateExpand: true,
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    scrollOnActivate: true,
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private tagHierarchyService: TagHierarchyService
  ) { }

  ngOnInit() {
    this.tagHierarchy = new TagHierarchy();
    const id = this.route.snapshot.paramMap.get('id');
    this.tagHierarchyService.get(id).subscribe(
      tagHierarchyObj => {
        this.tagHierarchy = tagHierarchyObj;
        this.formTitle = tagHierarchyObj.name + this.formTitle;
        this.tagHierarchyService.getTagHierarchyTree(this.tagHierarchy).subscribe(
          res => {
            this.nodes = res.roots;
            if (this.nodes.length > 0) {
              this.structure = true;
            }
          }
        );
      }
    );
    this.tagHierarchyService.getAll().subscribe(
      (tagHierarchies: TagHierarchy[]) => {
        this.tagHierarchies = tagHierarchies;
      }
    );
  }

}
