import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.passthrough();
      this.passthrough("https://randomuser.me/api***");
      this.get("/api/users", () => ({
        reminders: [
          { id: 1, text: "Walk the dog" },
          { id: 2, text: "Take out the trash" },
          { id: 3, text: "Work out" },
        ],
      }));
    },
  });
}
