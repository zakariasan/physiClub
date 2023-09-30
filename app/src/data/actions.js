
export const setLogin = (user, token) =>({
	type: 'SET_LOGIN',
	payload:{user, token},
})

export const setLogout = () =>({
	type: 'SET_LOGOUT',
})
