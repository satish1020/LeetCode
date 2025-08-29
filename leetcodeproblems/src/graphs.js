// tropological sort
// indegree is an array where  a = b count
// adjacent is an array of arrays where b = [a,....] where a is edges
// https://replit.com/@ZhangMYihua/Course-schedule-Topological-Sort-with-adjacency-list#index.js

var canFinish = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adjList = inDegree.map(() => []);
    for (var i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i]; // FIXED
        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0]);
    }
    let stack = [];
    for (var i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }
    let current = 0;
    while (stack.length > 0) {
        const currentIndegreeCourse = stack.pop();
        current++;
        for (const neighbor of adjList[currentIndegreeCourse]) { // FIXED
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                stack.push(neighbor);
            }
        }
    }
    return current === numCourses;
};
