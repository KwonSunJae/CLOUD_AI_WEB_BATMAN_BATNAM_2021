import Sector from "../../model/Sector";

export const save = async (ctx) => {
  const body = ctx.request.body;
	try{
		const sector = new Sector(
			body
		);
		const res = await sector.save();
		ctx.body = res;
	} catch (e){
		ctx.body = e;
	}
};

export const read = async (ctx) => {
	const {_id} = ctx.params;
	try{
		const sector = await Sector.findOne({_id}).exec();
		if(!sector){
			ctx.status=404;
			ctx.body="No Content";
			return;
		}
		ctx.body = sector;
	} catch(e){
		ctx.body = e;
	}
}

export const update = async ( ctx ) => {
	const {_id} = ctx.params;
	const body = ctx.request.body;
	try{
		const res = await Sector.updateOne({_id},body);
		ctx.status = 204;
	} catch(e){
		ctx.status=400;
	}
}

export const remove = async ( ctx ) => {
	const {_id} = ctx.params;
	try{
		await Sector.deleteOne({_id});
		ctx.status=204;
	} catch(e){
		ctx.status=400;
	}
}

export const list = async (ctx) => {
	try{
		const sectors = await Sector.find().exec();
		ctx.body = sectors;
	} catch(e){
		ctx.throw(500,e);
	}
}
