import { vi, it, describe, expect } from 'vitest';
const prisma = require('./../src/schema/prisma');
const recipeMock = require('./mockData/recipeMock');

describe('Recipe Model', () => {
    it('should call findMany and return recipe', async () => {
        vi.spyOn(prisma.recipe, 'findMany').mockResolvedValueOnce(recipeMock);
        
        const result = await prisma.recipe.findMany({
            include:{
                ingredients:{
                    include:{
                        ingredient: true
                    }
                }
            }
        });

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
        expect(result).toBe(recipeMock);
    });

    it('should call findUnique', async () => {
        vi.spyOn(prisma.recipe, 'findUnique').mockResolvedValueOnce(recipeMock);
        const result = await prisma.recipe.findUnique({
            where: {
                id: recipeMock.id
            },
            include: {
                ingredients:{
                    include:{
                        ingredient: true
                    }
                },
                steps: true,
            }, 
        })
        expect(prisma.recipe.findUnique).toHaveBeenCalled();
        expect(prisma.recipe.findUnique).toHaveBeenCalledTimes(1);
        expect(prisma.recipe.findUnique).toHaveBeenCalledWith({
            where: {
                id: recipeMock.id
            },
            include: {
                ingredients:{
                    include:{
                        ingredient: true
                    }
                },
                steps: true,
            },
        });
        expect(result).toBe(recipeMock);
    });
});