import React from 'react';

// --- Placeholder Icons (Simulating SVG imports for cleaner structure) ---

const HomeIcon = () => (
    <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
const UserIcon = () => (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

// --- Mock Data ---

const MOCK_USER = {
    name: "علياء محمد",
    avatarColor: "bg-pink-400",
};

const MOCK_POSTS = [
    { id: 1, author: "أحمد السيد", time: "5 دقائق", content: "استمتعت بيوم رائع في الطبيعة الخضراء! 🌿 #سعادة", avatarColor: "bg-green-500", imageUrl: "https://via.placeholder.com/600x400/81C784/ffffff?text=صورة+طبيعية" },
    { id: 2, author: "فاطمة الزهراء", time: "ساعة واحدة", content: "هل من أحد شاهد الفيلم الجديد؟ رأيكم يهمني.", avatarColor: "bg-yellow-500", imageUrl: null },
    { id: 3, author: "محمد علي", time: "يوم أمس", content: "تكنولوجيا الذكاء الاصطناعي تتطور بسرعة مذهلة.", avatarColor: "bg-indigo-500", imageUrl: "https://via.placeholder.com/600x400/6D88E3/ffffff?text=AI+Tech" },
];

const MOCK_LINKS = [
    { name: MOCK_USER.name, icon: <div className={`w-8 h-8 rounded-full ${MOCK_USER.avatarColor} border border-gray-300`}></div>, link: "#profile" },
    { name: "الأصدقاء", icon: <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-sm">F</div>, link: "#friends" },
    { name: "المجموعات", icon: <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-sm">G</div>, link: "#groups" },
    { name: "مقاطع الفيديو", icon: <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-sm">V</div>, link: "#video" },
    { name: "سوق", icon: <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold text-sm">M</div>, link: "#marketplace" },
];

// --- Sub Components ---

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="flex justify-between items-center h-14 max-w-[1500px] mx-auto px-4">
            
            {/* Left Section: Logo & Search */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="text-3xl font-bold text-blue-600">f</div> 
                <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-2 w-72">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="البحث في فيسبوك"
                        className="bg-transparent outline-none text-sm w-full mx-2"
                        style={{direction: 'rtl'}}
                    />
                </div>
            </div>

            {/* Center Section: Navigation Icons */}
            <nav className="hidden md:flex flex-grow justify-center h-full">
                <div className="flex space-x-12 rtl:space-x-reverse h-full">
                    <button className="flex items-center border-b-4 border-blue-600 px-8">
                        <HomeIcon />
                    </button>
                    <button className="flex items-center text-gray-500 hover:bg-gray-100 px-8 rounded-lg transition">
                        <div className="w-7 h-7">V</div> {/* Videos Placeholder */}
                    </button>
                    <button className="flex items-center text-gray-500 hover:bg-gray-100 px-8 rounded-lg transition">
                        <div className="w-7 h-7">M</div> {/* Marketplace Placeholder */}
                    </button>
                </div>
            </nav>

            {/* Right Section: User & Actions */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <span className="font-bold text-lg">9+</span> {/* Messages/Notifications */}
                </button>
                <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <span className="font-bold text-lg">?</span> {/* Help */}
                </button>
                
                {/* User Profile Avatar */}
                <div className={`w-10 h-10 rounded-full ${MOCK_USER.avatarColor} cursor-pointer border-2 border-transparent hover:border-blue-600 transition`}></div>
            </div>
        </div>
    </header>
);

const SidebarLink = ({ name, icon, isContact = false }) => (
    <div className={`flex items-center p-2 cursor-pointer rounded-lg transition hover:bg-gray-200 ${isContact ? 'mb-1' : ''}`}>
        {icon}
        <span className={`text-sm font-medium mr-3 ${isContact ? 'text-gray-700' : 'text-gray-800'}`}>{name}</span>
    </div>
);

const PostCard = ({ author, time, content, imageUrl, avatarColor }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        {/* Post Header */}
        <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${avatarColor}`}></div>
            <div className="mr-3">
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-xs text-gray-500">{time}</p>
            </div>
        </div>

        {/* Content */}
        <p className="text-gray-800 mb-3" style={{textAlign: 'right'}}>{content}</p>

        {/* Image */}
        {imageUrl && (
            <div className="mt-3 -mx-4">
                <img src={imageUrl} alt="Post media" className="w-full object-cover max-h-96" />
            </div>
        )}

        {/* Actions (Simplified) */}
        <div className="flex justify-around border-t mt-3 pt-3 text-gray-600 text-sm">
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>أعجبني</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>تعليق</span>
            </button>
            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>مشاركة</span>
            </button>
        </div>
    </div>
);

const StatusComposer = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center pb-3 border-b border-gray-200">
            <div className={`w-10 h-10 rounded-full ${MOCK_USER.avatarColor}`}></div>
            <input
                type="text"
                placeholder={`بماذا تفكر يا ${MOCK_USER.name.split(' ')[0]}؟`}
                className="flex-grow bg-gray-100 rounded-full py-2 px-4 mr-2 focus:outline-none text-right text-gray-700"
                style={{direction: 'rtl'}}
            />
        </div>
        <div className="flex justify-around mt-3 text-sm text-gray-500 font-medium">
            <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                <span className="text-red-500 ml-1">🔴</span> بث مباشر
            </button>
            <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                <span className="text-green-500 ml-1">📸</span> صورة/فيديو
            </button>
            <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                <span className="text-yellow-500 ml-1">😀</span> الإحساس/النشاط
            </button>
        </div>
    </div>
);

const LeftSidebar = () => (
    <div className="hidden lg:block w-[300px] fixed top-14 bottom-0 right-0 overflow-y-auto pt-4 pr-3 text-right">
        {MOCK_LINKS.map((link, index) => (
            <SidebarLink key={index} name={link.name} icon={link.icon} />
        ))}
        <div className="border-t border-gray-300 my-2"></div>
        <h4 className="text-md font-semibold text-gray-500 my-2 px-2">اختصاراتك</h4>
        {/* Placeholder for shortcuts */}
        <SidebarLink name="مجموعة البرمجة" icon={<div className="w-8 h-8 rounded-lg bg-purple-200 text-purple-600 flex items-center justify-center">#</div>} />
        <SidebarLink name="صفحة الأخبار" icon={<div className="w-8 h-8 rounded-lg bg-blue-200 text-blue-600 flex items-center justify-center">N</div>} />
        <p className="text-xs text-gray-500 p-2 mt-4">
            الخصوصية · الشروط · الإعلانات · الخ...
        </p>
    </div>
);

const RightSidebar = () => (
    <div className="hidden xl:block w-[300px] fixed top-14 bottom-0 left-0 overflow-y-auto pt-4 pl-3 text-right">
        <h4 className="text-lg font-semibold text-gray-500 my-2 px-2">جهات الاتصال</h4>
        <div className="space-y-1">
            {['سالم خالد (نشط)', 'نورة علي', 'يوسف أحمد', 'هند سعيد', 'خالد منصور'].map((name, index) => (
                <SidebarLink 
                    key={index} 
                    name={name} 
                    isContact={true} 
                    icon={
                        <div className="relative">
                            <div className={`w-8 h-8 rounded-full bg-gray-300 border border-white`}></div>
                            {index % 2 === 0 && (
                                <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                        </div>
                    }
                />
            ))}
        </div>
    </div>
);

const Feed = () => (
    <div className="w-full lg:w-[600px] px-2 pt-4">
        {/* Stories Placeholder (Simplified) */}
        <div className="flex justify-between space-x-3 mb-6">
            <div className="w-1/4 h-48 bg-white rounded-xl shadow-md p-3 flex flex-col justify-end text-center text-white font-semibold relative overflow-hidden cursor-pointer">
                <img src="https://via.placeholder.com/100x160/4A90E2/ffffff?text=قصتك" className="absolute inset-0 w-full h-full object-cover filter brightness-75" alt="Story" />
                <div className="absolute top-2 right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-xl">+</div>
                <p className="z-10 text-xs">إنشاء قصة</p>
            </div>
            {['سارة', 'ماجد', 'ليلى'].map((name, index) => (
                <div key={index} className="w-1/4 h-48 bg-gray-200 rounded-xl shadow-md p-3 flex flex-col justify-end text-center text-white font-semibold relative overflow-hidden cursor-pointer">
                     <img src={`https://via.placeholder.com/100x160/9B59B6/ffffff?text=${name}`} className="absolute inset-0 w-full h-full object-cover filter brightness-75" alt="Story" />
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full border-4 border-blue-600 bg-gray-300"></div>
                    <p className="z-10 text-xs">{name}</p>
                </div>
            ))}
        </div>

        {/* Status Composer */}
        <StatusComposer />
        
        {/* Feed Posts */}
        {MOCK_POSTS.map(post => (
            <PostCard 
                key={post.id} 
                author={post.author} 
                time={post.time} 
                content={post.content} 
                imageUrl={post.imageUrl} 
                avatarColor={post.avatarColor}
            />
        ))}
    </div>
);

// --- Main App Component ---

function App() {
    return (
        <div className="bg-gray-100 min-h-screen" style={{direction: 'rtl', fontFamily: 'Arial, sans-serif'}}>
            <Header />
            
            <div className="max-w-[1500px] mx-auto pt-14 flex justify-center">
                
                {/* Left (Contacts/Ads - Hidden on mobile/tablet) */}
                <RightSidebar /> 
                
                {/* Center (Feed) */}
                <main className="flex-grow mx-auto lg:ml-[300px] lg:mr-[300px]">
                    <Feed />
                </main>
                
                {/* Right (Navigation - Hidden on mobile/tablet) */}
                <LeftSidebar />
            </div>

            {/* Mobile/Tablet Search and Menu Bar (Bottom fixed, simplified) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-12 flex justify-around items-center z-50">
                <HomeIcon />
                <button className="text-gray-500 w-8 h-8">V</button>
                <button className="text-gray-500 w-8 h-8">G</button>
                <button className="text-gray-500 w-8 h-8">N</button>
                <div className={`w-8 h-8 rounded-full ${MOCK_USER.avatarColor}`}></div>
            </div>

        </div>
    );
}

export default App;