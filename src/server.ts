import fastify from "fastify";
import { createTrip } from "./routes/create-trip";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import cors from "@fastify/cors";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update-trip";
import { getTripDetails } from "./routes/get-trip-details";
import { getParticipant } from "./routes/get-participant";
import { errorHandler } from "./error-handler";
import { env } from "./env";

export const app = fastify()


// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// app.get("/listar", async () => {
//     const trips = await prisma.trip.findMany()
//     return trips
// })

app.setErrorHandler(errorHandler)

app.register(cors, {
    origin: env.API_BASE_URL
})
app.register(createTrip)
app.register(confirmTrip)
app.register(updateTrip)
app.register(getTripDetails)

app.register(confirmParticipant)
app.register(getParticipants)
app.register(getParticipant)
app.register(createInvite)

app.register(createActivity)
app.register(getActivities)

app.register(createLink)
app.register(getLinks)

// funcao anonima de callback abaixo
app.listen({ port: env.PORT }).then(() => {
    console.log("server running...")
})