import { vi, it, describe, expect } from 'vitest';
const recipeController = require('./../src/controllers/recipeController');
const recipeMock = require('./mockData/recipeMock');
const prisma = require('./../src/schema/prisma');

describe('Recipe Controller', () => {
    it('should call findRandomRecipe and return recipe', async () => {

        // spy on recipe Controller
        vi.spyOn(recipeController, 'findRandomRecipe');
        
        // spy on prisma.recipe.findMany method
        vi.spyOn(prisma.recipe, 'findMany').mockResolvedValueOnce([recipeMock]);
        
        // spy on random
        vi.spyOn(global.Math, 'random').mockReturnValue(0);

        // mock req & res objects
        const req = {
            body: {},
            params: {}
        };

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        // call findRandomRecipe method
        await recipeController.findRandomRecipe(req, res)
        
        expect(recipeController.findRandomRecipe).toHaveBeenCalled();
        expect(recipeController.findRandomRecipe).toHaveBeenCalledTimes(1);

        expect(prisma.recipe.findMany).toHaveBeenCalled();
        expect(prisma.recipe.findMany).toHaveBeenCalledTimes(1);
        expect(prisma.recipe.findMany).toHaveBeenCalledWith({
            include:{
                ingredients:{
                    include:{
                        ingredient: true
                    }
                }
            }
        });

        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(recipeMock);
    });

    it('should call findRandomRecipe and return 404', async () => {
        // spy on recipe Controller
        vi.spyOn(recipeController, 'findRandomRecipe');
        
        // spy on prisma.recipe.findMany method
        vi.spyOn(prisma.recipe, 'findMany').mockResolvedValueOnce([]);
        
        // spy on random
        vi.spyOn(global.Math, 'random');

        // mock req & res objects
        const req = {
            body: {},
            params: {}
        };

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        // call findRandomRecipe method
        await recipeController.findRandomRecipe(req, res)

        expect(recipeController.findRandomRecipe).toHaveBeenCalled();
        expect(recipeController.findRandomRecipe).toHaveBeenCalledTimes(1);

        expect(prisma.recipe.findMany).toHaveBeenCalled();
        expect(prisma.recipe.findMany).toHaveBeenCalledTimes(1);
        expect(prisma.recipe.findMany).toHaveBeenCalledWith({
            include:{
                ingredients:{
                    include:{
                        ingredient: true
                    }
                }
            }
        });

        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith("Aucune recette n'a été trouvée, revenez plus tard...");

        expect(global.Math.random).not.toHaveBeenCalled();
    });

    it('should call findUnique and return a recipe', async () => {
        vi.spyOn(recipeController, 'findOneRecipe');
        vi.spyOn(prisma.recipe, 'findUnique').mockResolvedValueOnce(recipeMock);

        const req = {
            body: {},
            params: {}
        };

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        await recipeController.findOneRecipe(req, res)
        
        expect(prisma.recipe.findUnique).toHaveBeenCalled();
        expect(prisma.recipe.findUnique).toHaveBeenCalledTimes(1);
        
        expect(recipeController.findOneRecipe).toHaveBeenCalled();
        expect(recipeController.findOneRecipe).toHaveBeenCalledTimes(1);
        
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(recipeMock);
    });

    it('should not find a recipe and return an error message', async () => {
        vi.spyOn(recipeController, 'findOneRecipe');
        vi.spyOn(prisma.recipe, 'findUnique').mockResolvedValueOnce(undefined);

        const req = {
            body: {},
            params: {}
        };

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        await recipeController.findOneRecipe(req, res)
        
        expect(prisma.recipe.findUnique).toHaveBeenCalled();
        expect(prisma.recipe.findUnique).toHaveBeenCalledTimes(1);
        
        expect(recipeController.findOneRecipe).toHaveBeenCalled();
        expect(recipeController.findOneRecipe).toHaveBeenCalledTimes(1);
        
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);
        
        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith('Cette recette n\'existe pas...');
    });
});