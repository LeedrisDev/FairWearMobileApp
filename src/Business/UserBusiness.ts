import { GeneralModel } from '../Contexts/GeneralContext';
import createNewUser, {
  createUserExperience,
  getUser,
  getUserExperience,
  getUserHistory,
  UserModel,
} from '../DataAccess/UserDataAccess';

export default async function getGeneralUserInfo(firebaseId: string): Promise<GeneralModel> {
  const current = await getUser(firebaseId);
  const userExperience = await getUserExperience(current.id);
  const userHistory = await getUserHistory(current.id);

  return {
    id: current.id,
    name: current.username,
    phone: current.phone,
    score: userExperience.score,
    level: userExperience.level,
    todos: userExperience.todos,
    history: userHistory.products,
  };
}

export async function createAndSetupNewUser(user: Partial<UserModel>): Promise<UserModel> {
  const newUser = await createNewUser(user);

  if (newUser) {
    await createUserExperience(newUser.id);
  }

  return newUser;
}
