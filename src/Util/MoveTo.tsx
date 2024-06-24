export const MoveToIssue = (issueId: number, varName: string, varNum: number) => {
    history.push(`/issue/${issueId}/${varName}/${varNum}}`)
}
