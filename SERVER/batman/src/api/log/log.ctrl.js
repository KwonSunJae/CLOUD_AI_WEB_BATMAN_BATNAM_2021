import Log from "../../model/Log";

export const save = async ( ctx ) => {
	const body = ctx.request.body;
	const log = new Log(body);
	try{
		const res = await log.save();
		ctx.body=res;
	} catch(e){
		ctx.status=400;
		ctx.body=e;
	}
}

export const read = async ( ctx ) => {
	const {_id} = ctx.params;
	try{
		const log = await Log.findOne({_id}).exec();
		if(!log){
			ctx.status = 404;
			ctx.body = "No Log";
			return;
		}
		ctx.body = log;
	} catch (e){
		ctx.body = e;
	}
}

export const update = async ( ctx ) => {
	const {_id} = ctx.params;
	const body = ctx.request.body;
	try{
		const res = await Log.updateOne({_id},body);
		ctx.status = 204;
	} catch(e){
		ctx.status=400;
	}
}

export const remove = async ( ctx ) => {
	const {_id} = ctx.params;
	try{
		await Log.deleteOne({_id});
		ctx.status=204;
	} catch(e){
		ctx.status=400;
	}
}

// basic CRUD

export const list = async (ctx) => {
	try{
		const logs = await Log.find().exec();
		ctx.body = logs;
	} catch(e){
		ctx.throw(500,e);
	}
}