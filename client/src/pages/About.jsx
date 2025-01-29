export default function About() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-center py-24">
        <div className="max-w-3xl mx-auto p-2">
          <div>
            <h1 className="text-3xl font-semibold text-center mb-3">
              About this Blog Application
            </h1>
            <div className="text-md light:text-black dark:text-gray-500 text-center">
              <p>
                Welcome to Blog Application!
                <br />A blog application is a web or mobile platform where users
                can create, edit, and read blog posts. It serves as a space for
                both bloggers and readers to connect. We encourage you to share
                your thoughts by leaving comments on our posts and engaging in
                discussions with other readers. You can also like and reply to
                other people's comments, fostering a supportive and interactive
                community. Together, we can learn, grow, and inspire each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
