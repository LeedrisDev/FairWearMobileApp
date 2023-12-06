import axios from 'axios';
import AppConstants from '../Utils/AppConstants';
import { SmallProductModel } from '../Contexts/GeneralContext';

export interface UserModel {
  id: number;
  username: string;
  email: string;
  phone: string;
  languagePreferences: string;
  theme: string;
  firebaseId: string;
}

export interface UserExperienceModel {
  id: number;
  userId: number;
  score: number;
  level: number;
  todos: number[];
}

export interface UserHistoryModel {
  userId: number;
  products: SmallProductModel[];
}

export async function updateLevel(level: UserExperienceModel): Promise<UserExperienceModel> {
  try {
    const response = await axios.put(`${AppConstants.API_HOST}/api/userExperience`, level);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
export default async function createNewUser(user: Partial<UserModel>): Promise<UserModel> {
  try {
    const response = await axios.post(`${AppConstants.API_HOST}/api/user`, user);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getUser(firebaseId: string): Promise<UserModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/user/${firebaseId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getUserExperience(userId: number): Promise<UserExperienceModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/userExperience/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function createUserExperience(userId: number): Promise<UserExperienceModel> {
  try {
    const response = await axios.post(`${AppConstants.API_HOST}/api/userExperience`, {
      userId,
      score: 0,
      level: 1,
      todos: [0, 0, 0],
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getUserHistory(userId: number): Promise<UserHistoryModel> {
  try {
    const response = await axios.get(`${AppConstants.API_HOST}/api/history/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

interface newProduct {
  "userId": number,
  "productId": number,
}
export async function putProductHistory(product: newProduct): Promise<UserHistoryModel> {
  try {
    const response = await axios.post(`${AppConstants.API_HOST}/api/history`, product);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
