import { ValidationError } from "apollo-server-micro";
import {
  extendType,
  inputObjectType,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
  },
});

export const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("email");
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent, _args, context) {
        return context.prisma.users.findMany();
      },
    });
  },
});

export const AddNewUser = objectType({
  name: "Mutation",
  definition(t) {
    t.nonNull.field("addNewUser", {
      type: "User",
      args: {
        data: UserCreateInput,
      },

      resolve(_root, { data }, ctx) {
        try {
          const user = ctx.prisma.users.create({
            data: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
            },
          });

          return user;
        } catch (err) {
          const message =
            (err as ValidationError).message ||
            "Pogresan unos. Pokusajte ponovo.";
          // return message;
          console.log(message);
        }
      },
    });
  },
});
