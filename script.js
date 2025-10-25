// Products with your brainrots
        let products = [
            {
                id: 1,
                name: "TRALALITA TRALALA",
                price: "$2.000",
                image: "tralalita.jpg",
                description: "¡El increíble TRALALITA TRALALA! ¡Un brainrot súper genial que te va a encantar!"
            },
            {
                id: 2,
                name: "TRALALERO TRALALA",
                price: "$2.000",
                image: "tralaleroTralala.jpg",
                description: "¡El genial TRALALERO TRALALA! ¡Súper divertido y único!"
            },
            {
                id: 3,
                name: "LOS BOMBINITOS",
                price: "$4.000",
                image: "los bombinitos.jpg",
                description: "¡Los increíbles BOMBINITOS! ¡Súper explosivos y geniales!"
            },
            {
                id: 4,
                name: "LOS COCODRILITOS",
                price: "$2.500",
                image: "noFilter.jpg",
                description: "¡Los fantásticos COCODRILITOS! ¡Súper salvajes y divertidos!"
            },
            {
                id: 5,
                name: "LOS ORCALITOS",
                price: "$6.000",
                image: "noFilter (1).jpg",
                description: "¡Los espectaculares ORCALITOS! ¡Súper marinos y geniales!"
            },
            {
                id: 6,
                name: "JOB JOB JOB SAHUR",
                price: "$6.000",
                image: "job.jpg",
                description: "¡El legendario JOB JOB JOB SAHUR! ¡El más épico de todos!"
            },
            {
                id: 7,
                name: "MATEO",
                price: "$2.500",
                image: "matteofr.jpg",
                description: "¡El increíble MATEO! ¡Súper único y especial!"
            },
            {
                id: 8,
                name: "PAKRAHMATMAMAT",
                price: "$4.000",
                image: "pakrah.jpg",
                description: "¡El asombroso PAKRAHMATMAMAT! ¡Súper misterioso y genial!"
            },
            {
                id: 9,
                name: "LA VACA SATURNO SATURNITA",
                price: "$4.000",
                image: "noFilter (2).jpg",
                description: "¡La increíble VACA SATURNO SATURNITA! ¡Súper espacial y genial!"
            }
        ];
        // Get all the elements we need
        const productsGrid = document.getElementById('productsGrid');
        const purchaseSection = document.getElementById('purchaseSection');
        const selectedProductInfo = document.getElementById('selectedProductInfo');
        const backToProducts = document.getElementById('backToProducts');
        const purchaseForm = document.getElementById('purchaseForm');
        const successMessage = document.getElementById('successMessage');

        let currentProduct = null;

        // Back to products button
        backToProducts.addEventListener('click', () => {
            purchaseSection.classList.add('hidden');
            document.getElementById('productsGrid').parentElement.classList.remove('hidden');
        });

        // Show all products in the new layout: NAME - IMAGE - PRICE - BUTTON
        function renderProducts() {
            productsGrid.innerHTML = products.map((product, index) => `
                <div class="card-hover bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border-4 border-yellow-300 shadow-2xl bounce-in" style="animation-delay: ${index * 0.2}s">
                    <!-- NAME AT TOP -->
                    <div class="p-6 pb-4">
                        <h3 class="text-2xl font-black text-yellow-300 text-center">${product.name}</h3>
                    </div>
                    
                    <!-- IMAGE IN MIDDLE -->
                    <div class="relative overflow-hidden mx-6 mb-4">
                        <div class="w-full h-56 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center relative">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-all duration-500 hover:scale-110 rounded-xl absolute inset-0" onload="this.style.opacity='1'; this.nextElementSibling.style.display='none';" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="opacity: 0; transition: opacity 0.5s;">
                            <div class="flex flex-col items-center justify-center text-white w-full h-full">
                                <span class="text-4xl mb-2">🖼</span>
                                <span class="font-bold text-center px-4">${product.name}</span>
                            </div>
                        </div>
                        <div class="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-black text-sm">
                            ¡NUEVO!
                        </div>
                    </div>
                    
                    <!-- PRICE -->
                    <div class="px-6 pb-4">
                        <div class="text-center bg-green-500/20 rounded-xl py-3">
                            <span class="text-3xl font-black text-green-300">${product.price}</span>
                        </div>
                    </div>
                    
                    <!-- BUTTON AT BOTTOM -->
                    <div class="p-6 pt-0">
                        <button onclick="buyProduct(${product.id}, '${product.name}', '${product.price}')" class="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 px-6 py-4 rounded-xl font-black text-xl btn-bounce shadow-lg">
                            <span class="emoji-spin">💳</span> ¡COMPRAR AHORA!
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Buy product function
        function buyProduct(id, name, price) {
            currentProduct = { id, name, price };
            selectedProductInfo.innerHTML = `
                <div class="bg-white/10 rounded-xl p-4">
                    <h3 class="text-3xl font-black text-yellow-300">${name}</h3>
                    <p class="text-2xl font-bold text-green-400">${price}</p>
                </div>
            `;
            
            // Hide products and show purchase section
            document.getElementById('productsGrid').parentElement.classList.add('hidden');
            purchaseSection.classList.remove('hidden');
            purchaseSection.scrollIntoView({ behavior: 'smooth' });
        }

  // Handle purchase form
        purchaseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const customerName = document.getElementById('customerName').value;
            const robloxName = document.getElementById('robloxName').value;
            
            // Tu número de WhatsApp
            const whatsappNumber = "573245640954";
            
            // --- VERIFICACIÓN CRÍTICA ---
            // Asegúrate de que un producto fue seleccionado antes de continuar
            if (!currentProduct) {
                console.error("Error: No se ha seleccionado un producto.");
                alert("Por favor, selecciona un producto para realizar la compra.");
                return;
            }
             } catch (error) {
                // Method 3: Fallback - create and click link
                const link = document.createElement('a');
                link.href = whatsappLink;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
const whatsappMessage = `🧠 NUEVO PEDIDO BRAINROT 🎮

📦 PRODUCTO: ${currentProduct.name}
💰 PRECIO: ${currentProduct.price}

👤 DATOS DEL CLIENTE:
• Nombre Real: ${customerName}
• Usuario Roblox: ${robloxName}

📅 Fecha del pedido: ${new Date().toLocaleString('es-ES')}

¡Hola! Quiero hacer este pedido de brainrot 🚀`;
            // 2. Creación del Enlace de WhatsApp (LA CORRECCIÓN)
            // Se usan backticks y la función encodeURIComponent() para el 'cifrado'
            const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
            
            // Try to open WhatsApp with multiple fallbacks
            try {
                // Method 1: Direct window.open
                const newWindow = window.open(whatsappLink, '_blank', 'noopener,noreferrer');
                
                // Method 2: If blocked, try location change
                if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                    window.location.href = whatsappLink;
                }
            } catch (error) {
                // Method 3: Fallback - create and click link
                const link = document.createElement('a');
                link.href = whatsappLink;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            
            purchaseForm.reset();
            showSuccess('¡Abriendo WhatsApp! Si no se abre, haz clic en el enlace que aparece 📱');
            
            // Show WhatsApp link as backup
            setTimeout(() => {
                const linkElement = document.createElement('div');
                linkElement.innerHTML = `
                    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-6 rounded-2xl shadow-2xl z-50 max-w-md text-center">
                        <h3 class="text-xl font-bold mb-4">¿No se abrió WhatsApp?</h3>
                        <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="bg-white text-green-500 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            📱 Abrir WhatsApp Manualmente
                        </a>
                        <button onclick="this.parentElement.parentElement.remove()" class="block mt-4 text-white underline">Cerrar</button>
                    </div>
                `;
                document.body.appendChild(linkElement);
                
                // Auto remove after 10 seconds
                setTimeout(() => {
                    if (linkElement.parentElement) {
                        linkElement.remove();
                    }
                }, 10000);
            }, 2000);
            
            // Go back to products after 6 seconds
            setTimeout(() => {
                purchaseSection.classList.add('hidden');
                document.getElementById('productsGrid').parentElement.classList.remove('hidden');
            }, 6000);
        });

        // Show success message with cool animation
        function showSuccess(message) {
            const msgElement = successMessage.querySelector('p');
            msgElement.textContent =  {message};
            successMessage.classList.remove('hidden');
            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 4000);
        }

        // Start the magic!
        renderProducts();








