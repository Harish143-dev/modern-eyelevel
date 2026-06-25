export interface BookingMeetingData {
  title: string;
  description: string;
  startTime: string; // ISO string with offset, e.g. "2026-06-30T10:00:00+05:30"
  endTime: string;   // ISO string with offset, e.g. "2026-06-30T11:00:00+05:30"
  email: string;
  name: string;
  phone: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
}

const WEBHOOK_URL =
  "https://automate.eyelevelstudio.in/webhook-test/30b0da17-4779-4557-878a-4ef85082c28c";

/**
 * Sends a booking request to the n8n webhook.
 * @param data The booking parameters containing title, description, start/end times, and client details.
 */
export async function bookCalendarMeeting(
  data: BookingMeetingData
): Promise<BookingResponse> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const contentType = response.headers.get("content-type");
    let result: any = null;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch {
        // Fallback for non-JSON responses
        if (response.ok) {
          return {
            success: true,
            message: text || "Booking confirmed",
          };
        }
      }
    }

    if (!response.ok) {
      return {
        success: false,
        message: result?.message || "Selected slot unavailable",
      };
    }

    if (result && typeof result === "object") {
      return {
        success: result.success !== false,
        message: result.message || "Booking confirmed",
      };
    }

    return {
      success: response.ok,
      message: response.ok ? "Booking confirmed" : "Booking failed",
    };
  } catch (error: any) {
    console.error("Booking API Error:", error);
    return {
      success: false,
      message:
        error?.message ||
        "An unexpected error occurred while booking. Please try again.",
    };
  }
}
