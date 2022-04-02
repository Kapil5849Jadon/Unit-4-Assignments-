const post =(model)=>async (req,res)=>{
     try {
          let item= await model.create(req.body);//console.log(item);
          return res.status(201).send (item);
     } catch (e) {
          return res.status(500).send(e.message);
     }
}

const getAll=(model) => async (req,res)=>{
     try {
         let item= await model.find().lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
}

const getOne = (model)=> async (req, res)=>{
     try {
         let item= await model.findById(req.params.id).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
}

const patchOne = (model) => async (req,res)=>{
     try {
         let item= await model.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
}

const deleteOne = (model) =>async (req,res)=>{
     try {
         let item= await model.findByIdAndDelete(req.params.id).lean().exec();
         return res.send (item)
     } catch (e) {
         return res.status(500).send(e.message)
     }
}

module.exports = (model)=>{
     return {
          post: post(model),
          getAll: getAll(model),
          getOne: getOne(model),
          patchOne: patchOne(model),
          deleteOne: deleteOne(model),
     }
}