const template = `
    <div class="chat-wrapper">
    <aside class="chat-aside">
        <div class="search-toolbar">
            <div class="profile-link">
                <span>Профиль</span>
            </div>
            <input class="search-input" type="text" placeholder="Поиск">
        </div>
        <div class="chat-history">
            <div class="chat-history-item">
                <div class="image-container">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="text-container">
                    <span class="chat-name">Андрей</span>
                    <span class="chat-history-text">Изображение</span>
                </div>
                <div class="date-container">
                    <div class="date">10:49</div>
                    <div class="bage">
                        <span class="bage-number">2</span>
                    </div>
                </div>
            </div>
            <div class="chat-history-item">
                <div class="image-container">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="text-container">
                    <span class="chat-name">Андрей</span>
                    <span class="chat-history-text">Изображение</span>
                </div>
                <div class="date-container">
                    <div class="date">10:49</div>
                    <div class="bage">
                        <span class="bage-number">2</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <main class="chat-main">
        <div class="chat-toolbar">
            <div class="info">
                <div class="image-container">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div>
                    <span>Вадим</span>
                </div>
            </div>
            <div class="manage-users">
                ...
            </div>
        </div>
        <div class="chat-body">
            <div class="chat-body-date">
                <span>19 июня</span>
            </div>
            <div class="message message-left">
                <div>
                    <p>
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
                        момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                        знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер
                        все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты
                        с пленкой.

                        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                        так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                        на аукционе за 45000 евро.
                    </p>
                </div>
                <div class="message-time"> <span> 11:56</span></div>
            </div>
            <div class="message message-right">
                <div>
                    <p> Супер!</p>
                </div>
                <div class="message-time"> <span> 11:58</span></div>
            </div>
        </div>
        <div class="message-toolbar">
            <button class="clip-button">^</button>
            <input placeholder="Сообщение" class="message-input" type="text">
            <button class="send-message-button">-></button>
        </div>
    </main>
</div>
`
export default template