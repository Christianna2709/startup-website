import { Router } from "express";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parseResult = SubmitContactBody.safeParse(req.body);

  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, subject, message } = parseResult.data;

  req.log.info({ name, email, subject }, "Contact form submission received");

  res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`,
  });
});

export default router;
