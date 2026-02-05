pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

  triggers {
        // Poll SCM every 5 minutes (you can adjust the schedule)
        pollSCM('H/5 * * * *')
    }
    
    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node & NPM') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Frontend') {
                    
                    bat 'npm install 
                    --include=dev'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('Frontend') {
                    
                    bat 'npm run build'
                }
            }
        }

        stage('Verify Build Output') {
            steps {
                dir('Frontend') {
                    bat '''
                    if exist dist (
                        echo Build folder exists
                    ) else (
                        echo Build failed
                        exit 1
                    )
                    '''
                }
            }
        }

        stage('Success') {
            steps {
                bat 'echo React CI pipeline completed successfully'
            }
        }
    }
}