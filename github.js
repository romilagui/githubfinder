class Github {
  constructor() {
    this.client_id = 'f4613e04739b83df154c';
    this.client_secret = 'fb232bea66a056848780d03dd9114a6e4a94a606';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    // Only show the last 5 repos 
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}