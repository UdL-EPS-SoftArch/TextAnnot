import { TagHierarchy } from './../tag-hierarchy';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { TreeComponent, TREE_ACTIONS, KEYS } from 'angular-tree-component';

@Component({
  selector: 'app-tag-hierarchy-quick-creation',
  templateUrl: './tag-hierarchy-quick-creation.component.html',
  styleUrls: ['./tag-hierarchy-quick-creation.component.css']
})
export class TagHierarchyQuickCreationComponent implements OnInit {

  public formTitle = 'Create TagHierarchy';
  public formSubtitle = 'Create TagHierarchy in a single shot';
  public tagHierarchy: TagHierarchy = <TagHierarchy>{};

  public newNodes = [];
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

  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {

  }

  goBack() {
    this.location.back();
  }

  private generateId(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
      length = Math.floor(Math.random() * chars.length);
    }

    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  addChildren(node) {
    node.data.children.push({
      id: this.generateId(10),
      name: '',
      children: []
    });
    this.tree.treeModel.update();
  }

  addRoot() {
    this.newNodes.push({
      id: this.generateId(10),
      name: 'new_root',
      children: []
    });
    this.tree.treeModel.update();
  }

  deleteNode(id: string) {
    this.deleteNodesRec(this.newNodes, id);
    this.tree.treeModel.update();
  }

  private deleteNodesRec(nodes: any[], id: string) {
    const index = nodes.findIndex(n => n.id === id);
    if (index >= 0) {
      nodes.splice(index, 1);
      return;
    }

    for (let i = 0; i < nodes.length; i++) {
      this.deleteNodesRec(nodes[i].children, id);
    }
  }
}
