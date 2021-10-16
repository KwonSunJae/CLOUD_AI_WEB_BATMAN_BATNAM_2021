import Runway from "../../model/Runway";

export const save = async ( ctx ) => {
	const {name,angles,top,bottom} = ctx.request.body;
	const new_runway = new Runway({
		name,
		angles,
		sectors:{
			top:top,
			bottom:bottom
		}
	});
	
	try{
		const res = await new_runway.save();
		ctx.body=res;
	} catch(e){
		ctx.status=400;
		ctx.body=e;
	}
}

export const read = async ( ctx ) => {
	const {_id} = ctx.params;
	try{
		const runway = await Runway.findOne({_id}).exec();
		if(!runway){
			ctx.status = 404;
			ctx.body = "No Runway";
			return;
		}
		ctx.body = runway;
	} catch (e){
		ctx.body = e;
	}
}

export const update = async ( ctx ) => {
	const {_id} = ctx.params;
	const body = ctx.request.body;
	try{
		const res = await Runway.updateOne({_id},body);
		ctx.status = 204;
	} catch(e){
		ctx.status=400;
	}
}

export const remove = async ( ctx ) => {
	const {_id} = ctx.params;
	try{
		await Runway.deleteOne({_id});
		ctx.status=204;
	} catch(e){
		ctx.status=400;
	}
}
// basic CRUD

export const list = async (ctx) => {
	try{
		const runways = await Runway.find().exec();
		ctx.body = runways;
	} catch(e){
		ctx.throw(500,e);
	}
}