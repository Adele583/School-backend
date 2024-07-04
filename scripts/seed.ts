const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        // Delete all existing categories
        await database.category.deleteMany();

        // Insert new categories
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Music" },
                { name: "Fitness" },
                { name: "Photography" },
                { name: "Accounting" },
                { name: "Engineering" },
                { name: "Filming" },
            ],
        });

        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();
