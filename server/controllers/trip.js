// const tripModel = require("../models/Trip");
// const userModel = require("../models/User");
// const renderMessage = require('../utils/error-handler');

// module.exports = {
//   get: {
//     allTrips(req, res, next) {
//       tripModel.find().lean().populate('buddies')
//         .then((trips) => {
//             trips=trips.map(x=> {
//                 const seat= x.seats- x.buddies.length=== 1;
//                 const seats = x.seats- x.buddies.length>1 ? x.seats- x.buddies.length : false;
//                 const AvailableSeats =x.seats- x.buddies.length;
//                 return Object.assign(x,{seat,seats,AvailableSeats})
//             })
//             res.status(200).send(trips)
//         }).catch((error)=> res.status(400).send({message : "There is no trips yet!"}))
//     },
//     details (req,res,next){
//         const {tripId} = req.params;
//         tripModel.findById({_id:tripId}).populate('buddies').lean().then((trip)=> {
//           userModel.findOne({username:trip.creator}).lean().then((c)=>{
//             return c.userImage;
//           }).then((userImage)=> {
//             const isCreator =trip.creator=== req.user.username;
//             const isAvailableSeats=trip.seats - trip.buddies.length;
//             const isJoined = !!trip.buddies.find(x=> x.email === req.user.email)
//             const username = req.user.username
//             const buddies = trip.buddies.map((x,i)=> {return {name : `${i+1}.${x.username}`, image :x.userImage}})
//             trip = Object.assign(trip,{isCreator,isAvailableSeats,isJoined,username,buddies,userImage})
//             res.status(200).send(trip)
//           }).catch(next)
            
//         }).catch(next)
//     },
//     closetrip(req,res,next){
//         const id = req.params._id
//         tripModel.findByIdAndDelete({_id:id})
//         .then((deleted)=>{
//             res.redirect('../../shared-trips'); 

//         }).catch(next)
//     },
//     edittrip(req,res,next){
//       tripModel.findById(req.params._id).lean().then((trip)=> {
//         res.render('../views/trip/edit-trip.hbs',{
//           ...req.user|| '',
//           ...trip,
//           seats : trip.seats-trip.buddies.length,
//           title :"Edit Trip Page"
//         })
//       }).catch(next)

//     }
//   },
//   post: {
//     create(req, res, next) {
//       const { startPoint,endPoint,date,time,carImage,carModel,seats,price,description,smoking,drinking,eating,climatic } = req.body;
//       tripModel
//         .create({startPoint,endPoint,date,time,carImage,carModel,seats,price,description,smoking,drinking,eating,climatic,creator:req.user.username})
//         .then((trip) => {
// 			 userModel.findByIdAndUpdate({_id:req.user.id},{$addToSet : {createdTrips : trip._id}},{useFindAndModify : false})
// 			 .then(()=> {
// 				res.status(200).send({id : req.user.id});
// 			 })
	
		
// 		})
//         .catch((error) => {
//             renderMessage(error,res,next);
//         });
//     },
//     join(req,res,next){
//         const {tripId} = req.params;
//         Promise.all([
//             tripModel.findByIdAndUpdate({_id:tripId},{$addToSet : {buddies : req.user.id}},{useFindAndModify : false}),
//             userModel.findByIdAndUpdate({_id:req.user.id},{$addToSet : {tripsHistory : tripId}},{useFindAndModify : false})
//         ]).then(([updatedTrip,updatedUser])=>{
//             res.status(200).send({status:200});
//         }).catch(next)
//     }












//     ,
//     edit(req,res,next){
//       const {_id}= req.params;
//       const {startPoint,endPoint,date,time,carImage,carModel,seats,price,description,smoking,drinking,eating,climatic}= req.body;
//       tripModel.findByIdAndUpdate(_id,{startPoint,endPoint,date,time,carImage,carModel,seats,price,description,smoking,drinking,eating,climatic})
//       .then((e)=>res.redirect(`../${_id}`))
//       .catch(next)
//     }
//   },
// };
