const graphql = require('graphql');
const Apartment = require('../models/apartment');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat
} = graphql;

const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: ( ) => ({
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat }
    })
})

const ApartmentType = new GraphQLObjectType({
    name: 'Apartment',
    fields: ( ) => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        price: { type: GraphQLInt },
        sqm: { type: GraphQLInt },
        bedrooms: { type: GraphQLInt },
        bathrooms: { type: GraphQLInt },
        image: { type: GraphQLString },
        location: { type: LocationType }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        apartment: {
            type: ApartmentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Apartment.findById(args.id)
            }
        },
        apartments: {
            type: new GraphQLList(ApartmentType),
            resolve(parent, args) {
                return Apartment.find({});
            }
        },
        apartmentsFilter: {
            type: new GraphQLList(ApartmentType),
            args: { price1: { type: GraphQLInt }, price2: { type: GraphQLInt },
                    sqm1: { type: GraphQLInt }, sqm2: { type: GraphQLInt },
                    bedrooms: { type: GraphQLInt}},
            resolve(parent, args) {
                return Apartment.find({ price: { $gte: args.price1, $lte: args.price2 },
                sqm: { $gte: args.sqm1, $lte: args.sqm2 }, bedrooms: { $gte: args.bedrooms }});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addApartment: {
            type: ApartmentType,
            args: {
                title: { type: GraphQLString },
                price: { type: GraphQLInt },
                sqm: { type: GraphQLInt },
                bedrooms: { type: GraphQLInt },
                bathrooms: { type: GraphQLInt },
                image: { type: GraphQLString },
                lat: { type: GraphQLFloat },
                lng: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                let apartment = new Apartment({
                    title: args.title,
                    price: args.price,
                    sqm: args.sqm,
                    bedrooms: args.bedrooms,
                    bathrooms: args.bathrooms,
                    image: args.image,
                    location: {
                        lat: args.lat,
                        lng: args.lng
                    }
                });
                return apartment.save();
            }
        }
        // ,
        // deleteApartment: {
        //     type: ApartmentType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args) {
        //         deleteApartment()
        //     }
        // }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});