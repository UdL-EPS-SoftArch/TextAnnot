
export interface TagHierarchyTree {
  name: string;
  roots: TagTree[];
}

export interface TagTree {
  name: string;
  children: TagTree[];
}
