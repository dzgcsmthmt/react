class FiberNode {
    constructor(vnode) {
        this.vnode = vnode;
        this.name = this.vnode.tag;
        this.child = null;
        this.sibling = null;
        this.return = null;
        this.render();
    }

    render() {
        let children = this.vnode.children || [];

        this.child = children.reduceRight((pre, cur) => {
            let node = new FiberNode(cur);
            node.sibling = pre;
            node.return = this;
            return node;
        }, null)

    }
}


var root = new FiberNode({
    tag: 'a1',
    children: [
        {
            tag: 'b1'
        },
        {
            tag: 'b2',
            children: [
                {
                    tag: 'c1',
                    children: [
                        { tag: 'd1' },
                        { tag: 'd2' },
                    ]
                }
            ]
        },
        {
            tag: 'b3',
            children: [
                { tag: 'c2' }
            ]
        }
    ]
});

console.log(root);

function walk2(root) {
    dfs(root);
    function dfs(node) {
        console.log(node.name);
        if (node.child) {
            dfs(node.child);
        }
        if (node.sibling) {
            dfs(node.sibling);
            node = node.sibling;
        }
    }
}

walk2(root);

console.log('-----------------------')

function walk3(root) {
    let cur = root,
        queue = [];

    while (cur || queue.length) {
        while (cur) {
            queue.push(cur);
            console.log(cur.name);
            cur = cur.child;
        }

        cur = queue.pop();
        cur = cur.sibling;
    }


}

walk3(root);


function doWork(node) {
    console.log(node.name);
    return node.child;
}

function walk(o) {
    let root = o;
    let current = o;

    while (true) {
        let child = doWork(current);
        if (child) {
            current = child;
            continue;
        }

        if (current === root) {
            return;
        }

        while (!current.sibling) {
            if (!current.return || current.return === root) {
                return;
            }

            // set the parent as the current active node
            current = current.return;
        }

        current = current.sibling;
    }
}
console.log('-----------------------')
walk(root);