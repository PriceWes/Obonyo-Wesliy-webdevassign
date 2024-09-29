document.getElementById("button").addEventListener("click", function() {
    var selectedService = document.getElementById("otherserv").value;
    var infoDiv = document.getElementById("service-info");
    
    var serviceInfo = {
        "graphic-design": "Graphic Design: Work with over 500+ designers to get a classy and tested design for your business.",
        "article-writing": "Article Writing: Collaborate with 700+ professional writers for detailed, researched papers, tested and approved.",
        "voice-acting": "Voice Acting: Choose from a pool of 200+ trained voice assistants for professional voice-over services.",
        "programming": "Programming: Access expert programmers to build functional and efficient code tailored to your needs.",
        "copywriting": "Copywriting: Get top-tier copywriting services that engage and convert your audience effectively.",
        "edit-proof": "Editing & Proofreading: Professional editing and proofreading services for all your writing needs.",
        "tech-write": "Technical Writing: Receive accurate and detailed technical documents from expert technical writers.",
        "web-des": "Web Design & Development: Build your online presence with professional web design and development services.",
        "vid-edit": "Video Editing: Professional video editing services to bring your visual content to life.",
        "email-market": "Email Marketing: Boost your brand with targeted email marketing strategies that drive conversions."
    };

    // Display the corresponding service information
    infoDiv.innerHTML = "<h3>" + serviceInfo[selectedService] + "</h3>";
});