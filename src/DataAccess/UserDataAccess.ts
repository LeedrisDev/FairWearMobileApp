import axios from 'axios';
import AppConstants from '../Utils/AppConstants';
import {SmallProductModel} from "../Contexts/GeneralContext";

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
            userId: userId,
            score: 0,
            level: 0,
            todos: [0, 0, 0]
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
