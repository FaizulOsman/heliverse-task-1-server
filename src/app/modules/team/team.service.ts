/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { SortOrder } from 'mongoose';
import { ITeam, ITeamFilters } from './team.interface';
import { Team } from './team.model';
import httpStatus from 'http-status';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { teamSearchableFields } from './team.constants';
import { IGenericResponse } from '../../../interfaces/common';
import ApiError from '../../../errors/apiError';
import { paginationHelper } from '../../../helper/paginationHelper';

// Create Team
const createTeam = async (payload: ITeam): Promise<ITeam | null> => {
  const result = await Team.create(payload);
  return result;
};

// Get All Teams (can also filter)
const getAllTeams = async (
  filters: ITeamFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ITeam[]>> => {
  // Try not to use any
  const { searchTerm, ...filtersData } = filters;

  const andConditions = []; // Try not to use any

  if (searchTerm) {
    andConditions?.push({
      $or: teamSearchableFields?.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return { [field]: value };
      }),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);

  const sortCondition: '' | { [key: string]: SortOrder } = sortBy &&
    sortOrder && { [sortBy]: sortOrder };

  const whereCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Team.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Team.countDocuments(whereCondition);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get Single Team
const getSingleTeam = async (id: string): Promise<ITeam | null> => {
  const result = await Team.findById(id);

  return result;
};

// Delete Team
const deleteTeam = async (id: string): Promise<ITeam | null> => {
  const result = await Team.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Team Not Found');
  }
  return result;
};

export const TeamService = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  deleteTeam,
};
