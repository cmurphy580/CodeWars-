function longestConsec(sa, k) {
    let n = sa.length; 
    if (n = 0 || k > n || k <= 0) return ""; 
    return sa.map((v,i) => sa.slice(i, i + k).join(''))
             .reduce((longest, current) => current.length > longest.length ? current : longest);
}