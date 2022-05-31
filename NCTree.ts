
class BinarySearchTree<T>{

    public head: NodeT<T> | null;

    constructor(head?: NodeT<T>){
        this.head = head || null;
    }
    public traversalPreorder(root: NodeT<T> | null = this.head):void{
        let temp = root;
        if(temp !== null) {
            console.log(temp.el);
            this.traversalInorder(temp.left);
            this.traversalInorder(temp.right);
        }
    }
    public traversalPostorder(root: NodeT<T> | null = this.head):void{
        let temp = root;
        if(temp !== null) {
            console.log(temp.el);
            this.traversalInorder(temp.left);
            this.traversalInorder(temp.right);
        }
    }
    public traversalInorder(root: NodeT<T> | null = this.head):void{
        let temp = root;
        if(temp !== null) {
            console.log(temp.el);
            this.traversalInorder(temp.left);
            this.traversalInorder(temp.right);
        }
    }
    public search(node: NodeT<T> | null = this.head, value:number):NodeT<T> | null{
        let temp = node;
        if(temp === null){
            return null;
        } else if (temp.el === value){
            return temp;
        } else{
            if(value >= temp.el){
                return this.search(temp.right, value);
            } else {
                return this.search(temp.left, value);
            }
        }
    }
    public insert(node: NodeT<T> | null = this.head, value: number):NodeT<T>{
        if(node === null){
            const root = new NodeT(value);
            return root;
        }
        else{
            if(value >= node.el){
                node.right = this.insert(node.right, value);
            } else {
                node.left = this.insert(node.left, value);
            }
            return node;
        }
    }
    public min(node: NodeT<T> | null = this.head):number{
        let minV = node.el;
        while (node.left !== null){
            minV = node.left.el;
            node = node.left;
        } return minV;
    }
    public deleteEl(node: NodeT<T> | null = this.head, value: number):void{
        node = this.deleteRec(node, value);
    }
    public deleteRec(node: NodeT<T> | null = this.head, value: number):NodeT<T>{
        if(node === null){
            return node;
        }
        // down
        if(value < node.el){
            node.left = this.deleteRec(node.left, value);
        } else if(value > node.el) {
            node.right = this.deleteRec(node.right, value);
        } else {
            if(node.left === null){
                return node.right;
            } else if (node.right === null){
                return node.left;
            }

            node.el = this.min(node.right);
            node.right = this.deleteRec(node.right, node.el);
        }
        return node;
    }

}

class NodeT<T>{
    public el: number;
    public left: NodeT<T> | null;
    public right: NodeT<T> | null;

    constructor(el: number){
        this.el = el;
        this.left = null;
        this.right = null;
    }
}

const root = new NodeT(12);
root.left = new NodeT(24);
root.right = new NodeT(13);

const myTree = new BinarySearchTree(root);

myTree.insert(myTree.head, 88);
myTree.insert(myTree.head, 100);
myTree.insert(myTree.head, 2);

console.log("\n\tBinary Search Tree\n");

console.log(
    "             12\n" +
    "          /     \\\n" +
    "         24       13\n" +
    "        /  \\    /  \n" +
    "       88  100 2   "+ "\n");



console.log("search : ");
console.log(myTree.search(myTree.head, 2));

console.log("\ntraversalPreorder: ");
myTree.traversalPreorder();
console.log("\ntraversalPostorder: ");
myTree.traversalPostorder();
console.log("\ntraversalInorder: ");
myTree.traversalInorder();

myTree.deleteEl(myTree.head, 88);
console.log("\ndeletedEl: ");
myTree.traversalInorder()

console.log(
    "             12\n" +
    "          /     \\\n" +
    "         24       13\n" +
    "           \\    /  \n" +
    "           100 2   "+ "\n");

console.log("\ntraversalPreorder: ");
myTree.traversalPreorder();
console.log("\ntraversalPostorder: ");
myTree.traversalPostorder();
console.log("\ntraversalInorder: ");
myTree.traversalInorder();