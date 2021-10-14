import Runway from "../../model/Runway";

export const save = (ctx) => {
	const {data} = ctx.request.body;
	ctx.body = data;
}