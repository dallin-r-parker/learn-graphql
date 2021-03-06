const graphql = require('graphql')
const { users } = require('./Users')
const _ = require('lodash')

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema
} = graphql

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLString },
		firstName: { type: GraphQLString },
		age: { type: GraphQLInt }
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: {id: {type: GraphQLString}},
			resolve(parentValue, args) {
				console.log('args: ', args)
				return _.find(users, {id: args.id})
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})