ALTER TABLE "selectedDates" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "selectedDates" ALTER COLUMN "event_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "selectedDates" ALTER COLUMN "dates" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "active" SET NOT NULL;