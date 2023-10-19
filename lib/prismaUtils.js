import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addPick({ name, relatedTwitterIds, cgId, cmcId }) {
    try {
        await prisma.pick.create({
            data: {
                name,
                relatedTwitterIds,
                cgId,
                cmcId
            }
        });
        prisma.$disconnect();
    } catch (error) {
        throw(error);
    }
};

export async function getAllPicks() {
    try {
        const picks =  await prisma.pick.findMany();
        prisma.$disconnect();
        return picks;
    } catch (error) {
        throw(error);
    }
}

export async function getPick(pickName) {
    try {
        const pick = await prisma.pick.findFirstOrThrow({
            where: { name: pickName }
        })
        prisma.$disconnect();
        return pick
    } catch (error) {
        throw(error);
    }
}

export async function updatePick(pickId, data) {
    try {
        await prisma.pick.update(
            {
                data,
                where: { id: pickId }
            }
        )
        prisma.$disconnect();
    } catch (error) {
        throw(error)
    }
}

export async function deletePick(pickId) {
    try {
        await prisma.pick.delete({ where: { id: pickId }});
        prisma.$disconnect();
    } catch (error) {
        throw(error)
    }
}