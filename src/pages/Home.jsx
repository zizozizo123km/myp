import React from 'react';

// --- Mock Components for Facebook Feed Structure ---

// Simplified Header (Assumes fixed layout provided by main App structure)
const Header = () => (
    <div className="sticky top-0 z-50 bg-white shadow-md p-2 flex items-center justify-between h-14">
        {/* Left Section: Logo & Search */}
        <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-extrabold text-blue-600 ml-2">facebook</h1>
            <div className="relative hidden md:block">
                <input
                    type="text"
                    placeholder="Search Facebook"
                    className="bg-gray-100 pl-8 pr-3 py-2 rounded-full text-sm w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </div>

        {/* Center Section: Navigation Icons (Placeholder) */}
        <div className="flex space-x-6 md:space-x-12">
            <button className="p-2 text-blue-600 border-b-4 border-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg hidden sm:block">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M7 11a3 3 0 016 0v1h1a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2h1v-1z"></path></svg>
            </button>
        </div>

        {/* Right Section: User & Utilities */}
        <div className="flex items-center space-x-2 mr-2">
            <div className="hidden lg:flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200 cursor-pointer">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="font-semibold text-sm">User</span>
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            </button>
        </div>
    </div>
);

// Left Navigation Sidebar
const LeftSidebar = () => {
    const navItems = [
        { name: "User Name", icon: "👤", color: "text-blue-500" },
        { name: "Friends", icon: "👥", color: "text-blue-500" },
        { name: "Watch", icon: "📺", color: "text-red-500" },
        { name: "Marketplace", icon: "🛒", color: "text-green-500" },
        { name: "Groups", icon: "👥", color: "text-blue-500" },
    ];
    return (
        <div className="hidden lg:block w-72 p-2 pt-4 overflow-y-auto h-[calc(100vh-56px)] sticky top-14">
            {navItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-150">
                    <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                </div>
            ))}
            <hr className="my-4 border-gray-300" />
            <h3 className="text-gray-600 font-semibold mb-2 text-md">Shortcuts</h3>
            <div className="p-2 text-sm text-gray-500">Events</div>
            <div className="p-2 text-sm text-gray-500">Gaming</div>
        </div>
    );
};

// Right Sidebar (Contacts and Widgets)
const RightSidebar = () => {
    const contacts = ["Ahmed Ali", "Fatima Saad", "Khalid Hassan", "Laila Omar"];
    return (
        <div className="hidden xl:block w-72 p-2 pt-4 overflow-y-auto h-[calc(100vh-56px)] sticky top-14 border-l border-gray-200">
            <h3 className="text-gray-600 font-semibold mb-3">Sponsored</h3>
            {/* Ad placeholder */}
            <div className="bg-white p-3 rounded-lg hover:bg-gray-100 cursor-pointer mb-4">
                <p className="text-sm font-medium">New Frontend Course</p>
                <p className="text-xs text-gray-500">Learn React & Tailwind quickly</p>
            </div>
            
            <hr className="my-4 border-gray-300" />

            <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-600 font-semibold">Contacts</h3>
                <div className="flex space-x-2 text-gray-500">
                    <button>🔎</button>
                    <button>...</button>
                </div>
            </div>
            {contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-150">
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white relative">
                        {/* Green online indicator */}
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border border-white"></span>
                    </div>
                    <span className="text-sm font-medium">{contact}</span>
                </div>
            ))}
        </div>
    );
};

// Story Component
const Story = ({ user }) => (
    <div className="relative flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer transition duration-200 transform hover:scale-[1.02]">
        <div className="bg-gradient-to-t from-black/80 to-transparent absolute inset-0 z-10"></div>
        <img src={`https://via.placeholder.com/150/4F46E5/FFFFFF?text=${user.substring(0, 1)}`} alt={`${user}'s Story`} className="object-cover w-full h-full" />
        
        {/* Profile Circle */}
        <div className="absolute top-2 left-2 w-9 h-9 rounded-full border-4 border-blue-500 bg-white z-20 flex items-center justify-center text-xs font-bold text-gray-700">
            {user.substring(0, 1)}
        </div>
        <div className="absolute bottom-2 left-2 text-white font-semibold text-xs z-20">{user}</div>
    </div>
);

// Create Post Area
const CreatePost = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
        <div className="flex items-center border-b pb-3 mb-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <input
                type="text"
                placeholder="What's on your mind, User Name?"
                className="flex-grow bg-gray-100 p-3 rounded-full text-sm focus:outline-none hover:bg-gray-200 transition"
            />
        </div>
        <div className="flex justify-around text-gray-500">
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition flex-1 justify-center">
                <span className="text-red-500">🔴</span>
                <span className="text-sm font-semibold hidden sm:block">Live Video</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition flex-1 justify-center">
                <span className="text-green-500">🏞️</span>
                <span className="text-sm font-semibold hidden sm:block">Photo/Video</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition flex-1 justify-center">
                <span className="text-yellow-500">😄</span>
                <span className="text-sm font-semibold hidden sm:block">Feeling/Activity</span>
            </button>
        </div>
    </div>
);

// Feed Post Component
const FeedPost = ({ user, time, content, likes = 15, comments = 3 }) => (
    <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
        {/* Post Header */}
        <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div>
                <p className="font-semibold text-sm">{user}</p>
                <p className="text-xs text-gray-500">{time}</p>
            </div>
            <button className="ml-auto text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100">...</button>
        </div>

        {/* Post Content */}
        <p className="mb-4 text-gray-800">{content}</p>

        {/* Interaction Summary */}
        <div className="flex justify-between text-xs text-gray-500 mb-2">
            <div className='flex items-center space-x-1'>
                <span className="bg-blue-600 rounded-full w-4 h-4 text-white text-center text-xs leading-4">👍</span>
                <span>{likes}</span>
            </div>
            <span>{comments} Comments</span>
        </div>

        {/* Interaction Buttons (Like, Comment, Share) */}
        <div className="flex justify-around border-t border-gray-200 py-1 text-gray-600 mt-2">
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 flex-1 justify-center transition">
                👍 <span className="text-sm font-semibold">Like</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 flex-1 justify-center transition">
                💬 <span className="text-sm font-semibold">Comment</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 flex-1 justify-center transition">
                📤 <span className="text-sm font-semibold">Share</span>
            </button>
        </div>
    </div>
);


const postsData = [
    { user: "Global News", time: "2h ago", content: "Exciting breakthrough in web development: React and Tailwind CSS integration streamlines complex UI development drastically, offering unmatched speed and scalability." },
    { user: "Tech Enthusiast", time: "45m ago", content: "Just deployed a new feature utilizing modern hooks. The performance gains from memoization are incredible. Never skip optimization steps!", likes: 45, comments: 12 },
    { user: "Local Community", time: "Yesterday", content: "Don't forget the neighborhood bake sale this Saturday! All proceeds go to the local library funding drive. See you there!" },
];

const storiesData = [
    { user: "Sarah J" },
    { user: "Mark D" },
    { user: "Omar K" },
    { user: "Aisha R" },
    { user: "Leo N" },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {/* Main Content Area */}
            <div className="flex justify-center mx-auto max-w-7xl pt-2">
                
                {/* 1. Left Sidebar */}
                <LeftSidebar />

                {/* 2. Middle Feed Area */}
                <main className="flex-grow max-w-xl mx-auto px-1 sm:px-4 lg:mx-4">
                    
                    {/* Story Section */}
                    <section className="flex space-x-3 overflow-x-auto py-4 mb-4">
                        {storiesData.map((story, index) => (
                            <Story key={index} user={story.user} />
                        ))}
                    </section>

                    {/* Create Post */}
                    <CreatePost />

                    {/* Feed Posts */}
                    {postsData.map((post, index) => (
                        <FeedPost key={index} {...post} />
                    ))}
                    
                    <p className="text-center text-gray-500 py-8">End of Feed</p>
                </main>

                {/* 3. Right Sidebar */}
                <RightSidebar />
            </div>
        </div>
    );
};

export default Home;