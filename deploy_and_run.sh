#!/usr/bin/env bash
# ==============================================================================
# VASILISA.LUNEVILLE COUTURE PLATFORM - МАСТЕР-СКРИПТ АВТОМАТИЗАЦИИ И ЗАПУСКА
# Скрипт: deploy_and_run.sh
# Проект: Vasilisa.luneville - вышивка от кутюр [vasilisa-luneville-couture-platform]
# Основатель и ведущий мастер: Василиса Боровикова [Vasilisa Borovikova]
# Таблица №1 CRM [15 листов 101..115]: 1ZBQ3iihSkyOECXoXAcIgtDZyrbYQ5rU_NWyF6wxjGZ4
# Таблица №2 Чатов [7 колонок A..G]:   1auLYHrJQW-OnhUVJ3iLcXUoTY4b2Phg8MXbIEt2kHgE
# Папка БД Drive:                      1DWd60F6n1i1mYdceLZx8RwHjVDGypz_d
# ==============================================================================

BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
MAGENTA='\033[0;35m'
RESET='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

print_banner() {
    clear
    echo -e "${CYAN}${BOLD}===============================================================================${RESET}"
    echo -e "${YELLOW}${BOLD}  ⚡ VASILISA.LUNEVILLE COUTURE PLATFORM v2.0 - АВТОМАТИЗИРОВАННЫЙ СТАРТ${RESET}"
    echo -e "${CYAN}  Основатель: Василиса Боровикова | Платформа: Vasilisa.luneville - вышивка от кутюр${RESET}"
    echo -e "${CYAN}  Направления: 5 онлайн МК • Наставничество • Студия Мармарис • Арт-отпуска • Бутик${RESET}"
    echo -e "${CYAN}  Директория: ${SCRIPT_DIR}${RESET}"
    echo -e "${CYAN}${BOLD}===============================================================================${RESET}"
    echo ""
}

log_info() { echo -e "${CYAN}[ИНФО]${RESET} $1"; }
log_success() { echo -e "${GREEN}[УСПЕХ]${RESET} $1"; }
log_warn() { echo -e "${YELLOW}[ВНИМАНИЕ]${RESET} $1"; }
log_error() { echo -e "${RED}[ОШИБКА]${RESET} $1"; }
log_step() { echo -e "\n${MAGENTA}${BOLD}==>${RESET} ${BOLD}$1${RESET}"; }

check_prerequisites() {
    log_step "Этап 1: Проверка окружения Node.js 18+ и npm"
    if ! command -v node >/dev/null 2>&1; then
        log_error "Node.js не установлен! Установите Node.js 18+ с https://nodejs.org/"
        exit 1
    fi
    log_success "Node.js обнаружен: $(node -v)"

    if ! command -v npm >/dev/null 2>&1; then
        log_error "npm не обнаружен!"
        exit 1
    fi
    log_success "npm обнаружен: v$(npm -v)"
}

resolve_app_dir() {
    if [ -f "$SCRIPT_DIR/package.json" ]; then
        APP_DIR="$SCRIPT_DIR"
    elif [ -d "$SCRIPT_DIR/vasilisa-luneville-couture-platform" ]; then
        APP_DIR="$SCRIPT_DIR/vasilisa-luneville-couture-platform"
    elif [ -d "$SCRIPT_DIR/../vasilisa-luneville-couture-platform" ]; then
        APP_DIR="$(cd "$SCRIPT_DIR/../vasilisa-luneville-couture-platform" && pwd)"
    elif [ -d "$SCRIPT_DIR/../../vasilisa-luneville-couture-platform" ]; then
        APP_DIR="$(cd "$SCRIPT_DIR/../../vasilisa-luneville-couture-platform" && pwd)"
    else
        APP_DIR="$SCRIPT_DIR"
    fi
    cd "$APP_DIR" || exit 1
}

install_dependencies() {
    log_step "Этап 2: Проверка зависимостей проекта vasilisa-luneville-couture-platform"
    if [ ! -d "node_modules" ]; then
        log_info "Установка пакетов через npm install..."
        npm install
        log_success "Зависимости успешно установлены!"
    else
        log_success "Каталог node_modules готов."
    fi
}

interactive_menu() {
    while true; do
        print_banner
        echo -e "${YELLOW}${BOLD}ВЫБЕРИТЕ ДЕЙСТВИЕ ДЛЯ ПЛАТФОРМЫ VASILISA.LUNEVILLE:${RESET}"
        echo -e "  ${GREEN}${BOLD}[1]${RESET} 🚀 Запустить сервер разработки Next.js [Порт 3000]"
        echo -e "  ${GREEN}${BOLD}[2]${RESET} 📦 Собрать и запустить продакшн версию [npm run build && npm start]"
        echo -e "  ${GREEN}${BOLD}[3]${RESET} 📊 Синхронизировать контент с Google Sheets [sync-content.js]"
        echo -e "  ${GREEN}${BOLD}[4]${RESET} 💾 Зафиксировать таблицы как эталон SSOT [save-master-seed.js]"
        echo -e "  ${GREEN}${BOLD}[5]${RESET} 🏛️ Инициализировать 15 листов CRM [init-google-sheets.js]"
        echo -e "  ${GREEN}${BOLD}[6]${RESET} 🛠️ Восстановить листы из эталона [restore-sheets.js]"
        echo -e "  ${RED}${BOLD}[0]${RESET} ❌ Выход"
        echo ""
        read -rp "Введите номер команды [0-6]: " choice
        case "$choice" in
            1) npm run dev; break ;;
            2) npm run build && npm start; break ;;
            3) node scripts/sync-content.js; read -rp "Нажмите ENTER..." ;;
            4) node scripts/save-master-seed.js; read -rp "Нажмите ENTER..." ;;
            5) node scripts/init-google-sheets.js; read -rp "Нажмите ENTER..." ;;
            6) node scripts/restore-sheets.js; read -rp "Нажмите ENTER..." ;;
            0) exit 0 ;;
            *) sleep 1 ;;
        esac
    done
}

print_banner
check_prerequisites
resolve_app_dir
install_dependencies
interactive_menu
