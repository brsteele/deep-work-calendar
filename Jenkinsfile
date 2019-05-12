pipeline {
    stages {
        stage('install') {
            steps {
                echo 'Checking out file'
                checkout scm
                echo 'Installing node modules'
                sh 'npm --version'
                sh 'npm i'
            }
        }
        stage('test') {
            echo 'Running unit tests'
            sh 'npm run test:once'
            echo 'Tests were successful'
        }
        stage('build') {
            sh 'npm run deploy'
            sh 'aws cloudfront create-invalidation --invalidation-batch file://invbatch.json --distribution-id E1SXH4V0NW360V'
        }
    }
}