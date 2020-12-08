export const Insert = (data) => ({
    type: "INSERT",
    payload: data,
})

export const Update = (data) => ({
    type: "UPDATE",
    payload:data
})

export const Delete = (data) => ({
    type: "DELETE",
    payload:data
})
export const AllData = () => ({
    type: "ALL",
})

