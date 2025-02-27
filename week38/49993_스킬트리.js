function solution(skill, skill_trees) {
    return skill_trees.filter(tree => {
        const filtered = [...tree].filter(ch => skill.includes(ch)).join('');
        return skill.startsWith(filtered);
    }).length;
}