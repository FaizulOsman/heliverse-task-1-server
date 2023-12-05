/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { TeamService } from './team.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ITeam } from './team.interface';
import { teamFilterableFields } from './team.constants';
import { paginationFields } from '../../../constants/pagination';
import { pick } from '../../../shared/pick';

// Create Team
const createTeam: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...teamData } = req.body;

    const result = await TeamService.createTeam(teamData);

    // Send Response
    sendResponse<ITeam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Team Created Successfully',
      data: result,
    });
  }
);

// Get all teams
const getAllTeams: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, teamFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await TeamService.getAllTeams(filters, paginationOptions);

    // Send Response
    sendResponse<ITeam[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Teams retrieved Successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

// Get single Team by id
const getSingleTeam: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await TeamService.getSingleTeam(id);

    // Send Response
    sendResponse<ITeam>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get Single Team Successfully',
      data: result,
    });
  }
);

// Delete Team
const deleteTeam: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await TeamService.deleteTeam(id);

  sendResponse<ITeam>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team deleted successfully',
    data: result,
  });
});

export const TeamController = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  deleteTeam,
};
