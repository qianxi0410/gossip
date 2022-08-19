import { Octokit } from 'octokit'

const cli = new Octokit({ auth: process.env.ACCESS_TOKEN })

export default cli
