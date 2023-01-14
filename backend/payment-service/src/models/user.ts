export default interface User {
    email: string,
    uid: string,
    username?: string,
    role?: string[],
    profile_picture?: string,
    bio?: string,
    company?: string,
    createdAt?: number,
    updatedAt?: number,
    lastActivityAt?: number,
    issuesOpened?: number,
    issuesSolved?: number,
    tags?: string[],
    social_score?: number
};