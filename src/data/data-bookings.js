import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    numNights: 5,
    numGuests: 1,
    cabinPrice: 250,
    extrasPrice: 20,
    totalPrice: 270,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: false,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    cabinId: 1,
    guestId: 2,
  },
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    numNights: 5,
    numGuests: 2,
    cabinPrice: 250,
    extrasPrice: 20,
    totalPrice: 270,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 1,
    guestId: 3,
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    numNights: 6,
    numGuests: 2,
    cabinPrice: 250,
    extrasPrice: 20,
    totalPrice: 270,
    status: "unconfirm",
    hasBreakfast: false,
    isPaid: false,
    observations: "",
    cabinId: 1,
    guestId: 4,
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    numNights: 6,
    numGuests: 2,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "checked-out",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    cabinId: 2,
    guestId: 5,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    numNights: 6,
    numGuests: 2,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 2,
    guestId: 6,
  },
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    numNights: 6,
    numGuests: 2,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    cabinId: 2,
    guestId: 7,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    numNights: 6,
    numGuests: 4,
    cabinPrice: 300,
    extrasPrice: 20,
    totalPrice: 320,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 3,
    guestId: 8,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    numNights: 6,
    numGuests: 3,
    cabinPrice: 300,
    extrasPrice: 20,
    totalPrice: 320,
    status: "checked-in",
    hasBreakfast: false,
    isPaid: true,
    observations: "We will be bringing our small dog with us",
    cabinId: 3,
    guestId: 9,
  },
  {
    created_at: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    numNights: 6,
    numGuests: 4,
    cabinPrice: 300,
    extrasPrice: 20,
    totalPrice: 320,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 3,
    guestId: 10,
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    numNights: 6,
    numGuests: 4,
    cabinPrice: 500,
    extrasPrice: 20,
    totalPrice: 520,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 4,
    guestId: 11,
  },
  {
    created_at: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    numNights: 5,
    numGuests: 4,
    cabinPrice: 500,
    extrasPrice: 20,
    totalPrice: 520,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    cabinId: 4,
    guestId: 12,
  },
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    numNights: 2,
    numGuests: 1,
    cabinPrice: 500,
    extrasPrice: 20,
    totalPrice: 520,
    status: "checked-out",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    cabinId: 4,
    guestId: 13,
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    numNights: 7,
    numGuests: 5,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    cabinId: 5,
    guestId: 14,
  },
  {
    created_at: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    numNights: 2,
    numGuests: 4,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 5,
    guestId: 15,
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    numNights: 3,
    numGuests: 6,
    cabinPrice: 350,
    extrasPrice: 20,
    totalPrice: 370,
    status: "checked-in",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    cabinId: 5,
    guestId: 16,
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    numNights: 9,
    numGuests: 6,
    cabinPrice: 800,
    extrasPrice: 20,
    totalPrice: 820,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: true,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    cabinId: 6,
    guestId: 17,
  },
  {
    created_at: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    numNights: 7,
    numGuests: 4,
    cabinPrice: 800,
    extrasPrice: 20,
    totalPrice: 820,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "I will need a rollaway bed for one of the guests",
    cabinId: 6,
    guestId: 18,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    numNights: 3,
    numGuests: 6,
    cabinPrice: 800,
    extrasPrice: 20,
    totalPrice: 820,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 6,
    guestId: 19,
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    numNights: 3,
    numGuests: 8,
    cabinPrice: 600,
    extrasPrice: 20,
    totalPrice: 620,
    status: "checked-in",
    hasBreakfast: false,
    isPaid: false,
    observations: "",
    cabinId: 7,
    guestId: 20,
  },
  {
    created_at: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    numNights: 3,
    numGuests: 7,
    cabinPrice: 600,
    extrasPrice: 20,
    totalPrice: 620,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 7,
    guestId: 21,
  },
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    numNights: 3,
    numGuests: 6,
    cabinPrice: 600,
    extrasPrice: 20,
    totalPrice: 620,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    cabinId: 7,
    guestId: 22,
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    numNights: 5,
    numGuests: 9,
    cabinPrice: 1400,
    extrasPrice: 20,
    totalPrice: 1420,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    cabinId: 8,
    guestId: 1,
  },
  {
    created_at: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    numNights: 4,
    numGuests: 10,
    cabinPrice: 1400,
    extrasPrice: 20,
    totalPrice: 1420,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    cabinId: 8,
    guestId: 23,
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    numNights: 3,
    numGuests: 7,
    cabinPrice: 1400,
    extrasPrice: 20,
    totalPrice: 1420,
    status: "checked-in",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    cabinId: 8,
    guestId: 24,
  },
];