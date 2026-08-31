pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Playwright project from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo 'Running Playwright test cases...'
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Playwright execution completed.'
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
