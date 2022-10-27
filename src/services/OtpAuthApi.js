import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OtpAuthApi = createApi({
  reducerPath: "OtpAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://adminapp.mobbypark.com/api" }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (sipNumber) => {
        return {
          url: "/user/auth/sendOtp",
          method: "POST",
          body: sipNumber,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (sipNumber) => {
        return {
          url: "/user/auth/verifyOtp",
          method: "POST",
          body: sipNumber,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = OtpAuthApi;
