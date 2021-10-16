import User from "../../model/User";

export const register = async (ctx) => {
	const {username,password} = ctx.request.body;
	try{
		const isExist = await User.findByUsername(username);
		if(isExist){
			ctx.status = 409;
			return;
		}
		
		const user = new User({
			username
		});
		
		await user.setPassword(password);
		await user.save();
		
		ctx.body = user.serialize();
	} catch(e){
		ctx.body = e;
	}
}

export const login = async (ctx) => {
	const {username,password} = ctx.request.body;
	
	if(!username || !password){
		ctx.status = 401;
		return;
	}
	
	try{
		const user = await User.findByUsername(username);
		
		if(!user){
			ctx.status = 401;
			return;
		}
		
		const isValid = await user.checkPassword(password);
		
		if(!isValid){
			ctx.status = 401;
			return;
		}
		
		ctx.body = user.serialize();
		const token = user.generateToken();
		ctx.cookies.set('access_token',token,{
			httpOnly:true
		});
	} catch (e) {
		ctx.body = e;
	}
}

export const check = async (ctx) => {
	const {user} = ctx.state;
	if(!user){
		ctx.status = 401;
		return;
	}
	ctx.body = user;
}

export const logout = async (ctx) => {
	ctx.cookies.set('access_token');
	ctx.status = 204;
}