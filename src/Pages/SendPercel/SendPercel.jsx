import React from "react";
import { useForm } from "react-hook-form";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="card-body text-black"
        onSubmit={handleSubmit(handleSendParcel)}
      >
        {/* document type */}
        <div className="mr-4">
          <label className="label">
            <input
              type="radio"
              {...register("percelType")}
              value="document"
              className="radio radio-secondary"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("percelType")}
              value="non-document"
              className="radio radio-secondary"
            />{" "}
            Non-Document
          </label>
        </div>
        {/* percel name and weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <label className="label">Percel Name</label>
            <input
              {...register("percelName")}
              type="text"
              className="input w-full"
              placeholder="Percel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Percel Weight (Kg)</label>
            <input
              {...register("percelWeight")}
              type="number"
              className="input w-full"
              placeholder="Percel Weight"
            />
          </fieldset>
        </div>
        {/* sender and reciver details in column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* sender info */}
          <div>
            <h2 className="font-semibold">Sender Details</h2>

            <fieldset className="fieldset">
              {/* sender name */}
              <label className="label">Sender Name</label>
              <input
                {...register("senderName")}
                type="text"
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender address */}
              <label className="label">Sender Address</label>
              <input
                {...register("senderAddress")}
                type="text"
                className="input w-full"
                placeholder="Sender Address"
              />
              {/* sender Phone */}
              <label className="label">Sender Phone Number</label>
              <input
                {...register("senderPhoneNumber")}
                type="number"
                className="input w-full"
                placeholder="Sender Phone Number"
              />
              {/* sender district */}
              <label className="label">Sender District</label>
              <input
                {...register("senderPhoneNumber")}
                type="text"
                className="input w-full"
                placeholder="Sender District"
              />
            </fieldset>
          </div>
          {/* reciver info */}
          <div>
            <h2 className="font-semibold">Reciver Details</h2>
          </div>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendPercel;
