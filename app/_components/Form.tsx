// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Form({ onSubmit, register, handleSubmit, t }: any) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-sm font-medium">{t("full name")}</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          {...register("name", { required: true })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">{t("email")}</label>
        <input
          type="email"
          className="mt-1 p-2 w-full border rounded-md"
          {...register("email", { required: true })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">{t("message")}</label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          rows={3}
          id="message"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          className="[background:linear-gradient(144deg,#4bc36d,#2b9178_50%,#64aaa9)] dark:text-white px-4 py-2 font-semibold rounded-md hover:opacity-80"
          type="submit"
        >
          {t("send")}
        </button>
      </div>
    </form>
  );
}

export default Form;
