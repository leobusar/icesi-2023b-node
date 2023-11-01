import UserModel, {UserInput, UserDocument} from "../models/user.model";

class UserService {
    public async create(userInput: UserInput): Promise<UserDocument> {
      try {
        const user = await UserModel.create(userInput);
        return user;
        } catch (error) {
            throw error;
        }
    }

    public async findByEmail(email: string): Promise<UserDocument | null> {
        try {
            const userExists = await UserModel.findOne({email});
            return userExists;
        } catch (error) {
            throw error 
        }
    }

    public async findById(id: string): Promise<UserDocument | null> {
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw error 
        }        
    }

    public async findAll(): Promise<UserDocument[]> {
        try {
            const users = await UserModel.find();
            return users;
        }  catch (error) {
            throw error;
        }
    }

    public async update(user: UserDocument, data: UserInput): Promise<UserDocument | null> {
        try {
            const userUpdate: UserDocument | null = await UserModel.findOneAndUpdate({_id: user.id}, data,{new: true});

            return userUpdate;

        }  catch (error) {
            throw error;
        }        

    }

}

export default new UserService();