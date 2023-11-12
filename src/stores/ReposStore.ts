import { defineStore } from 'pinia'

interface IRepos {
    userName: string
    repoName: string
    repoLink: string
    forkLink: string
    forkNumber: number
}

interface RepoObject {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: Owner
    html_url: string
    description: string
    fork: boolean
    url: string
    forks_url: string
    keys_url: string
    collaborators_url: string
    teams_url: string
    hooks_url: string
    issue_events_url: string
    events_url: string
    assignees_url: string
    branches_url: string
    tags_url: string
    blobs_url: string
    git_tags_url: string
    git_refs_url: string
    trees_url: string
    statuses_url: string
    languages_url: string
    stargazers_url: string
    contributors_url: string
    subscribers_url: string
    subscription_url: string
    commits_url: string
    git_commits_url: string
    comments_url: string
    issue_comment_url: string
    contents_url: string
    compare_url: string
    merges_url: string
    archive_url: string
    downloads_url: string
    issues_url: string
    pulls_url: string
    milestones_url: string
    notifications_url: string
    labels_url: string
    releases_url: string
    deployments_url: string
    created_at: string
    updated_at: string
    pushed_at: string
    git_url: string
    ssh_url: string
    clone_url: string
    svn_url: string
    homepage: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    has_discussions: boolean
    forks_count: number
    mirror_url: any
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license: any
    allow_forking: boolean
    is_template: boolean
    web_commit_signoff_required: boolean
    topics: any[]
    visibility: string
    forks: number
    open_issues: number
    watchers: number
    default_branch: string
    permissions: Permissions
  } 
interface Owner {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  } 
interface Permissions {
    admin: boolean
    maintain: boolean
    push: boolean
    triage: boolean
    pull: boolean
  }

// const fakeBackendResponseTodos = [
//     { id: 1, title: "Todo No 1", filtered: false, completed: false },
//     { id: 2, title: "Todo No 2", filtered: true, completed: true },
//     { id: 3, title: "Todo No 3", filtered: false, completed: true },
//     { id: 4, title: "Todo No 4", filtered: true, completed: false },
// ]


const token = "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"

const useReposStore = defineStore("ReposStore", {
    state: () => {
        return {
            repos: [] as IRepos[]
        }
    },
    actions: {
        async fetchRepos(userName: string) {
            this.repos = [] as IRepos[]
            const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.status != 200){
                console.log(response.status)
                alert(`ERROR ${response.status}`)
            }
            else {
                const data = await response.json()
                console.log(data)
                data.forEach((repo: RepoObject) => {
                this.repos.push({
                    userName: userName,
                    repoName: repo.name,
                    repoLink: repo.html_url,
                    forkLink: repo.forks_url,
                    forkNumber: repo.forks_count
                })
            });
            }
        }
    },
    getters: {
        all() : IRepos[] {
            return this.repos
        }
        // all() : ITodo[] {
        //     return this.todos
        // },
        // incomplete() : ITodo[] {
        //     return this.todos.filter(todo => !todo.completed)
        // },
        // complete() : ITodo[] {
        //     return this.todos.filter(todo => todo.completed)
        // }
    }
})
export default useReposStore